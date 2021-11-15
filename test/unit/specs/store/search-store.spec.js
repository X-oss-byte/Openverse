import store, { filterData } from '~/store/search'
import {
  SET_SEARCH_STATE_FROM_URL,
  TOGGLE_FILTER,
  UPDATE_QUERY_FROM_FILTERS,
  UPDATE_SEARCH_TYPE,
} from '~/constants/action-types'
import {
  SET_FILTER,
  SET_PROVIDERS_FILTERS,
  CLEAR_FILTERS,
  SET_FILTER_IS_VISIBLE,
  REPLACE_FILTERS,
  SET_SEARCH_TYPE,
  CLEAR_OTHER_MEDIA_TYPE_FILTERS,
  SET_QUERY,
} from '~/constants/mutation-types'
import { ALL_MEDIA, AUDIO, IMAGE } from '~/constants/media'

describe('Filter Store', () => {
  describe('state', () => {
    it('state contains all filters', () => {
      const defaultState = store.state()

      expect(defaultState.filters).toEqual(filterData)
    })

    it('state has filter hidden', () => {
      const defaultState = store.state()

      expect(defaultState.isFilterVisible).toBeFalsy()
    })

    it('isFilterVisible should be false when innerWidth property is undefined', () => {
      window.innerWidth = undefined
      const state = store.state()
      expect(state.isFilterVisible).toBeFalsy()
    })
    it('isFilterVisible should be false when window width is less then 800', () => {
      window.innerWidth = 500
      const state = store.state()
      expect(state.isFilterVisible).toBeFalsy()
    })
  })

  describe('mutations', () => {
    let state = null
    let mutations = null
    let getters = null

    beforeEach(() => {
      state = {
        search: {
          searchType: 'image',
          query: { q: 'foo' },
        },
        ...store.state(),
      }
      mutations = store.mutations
      getters = store.getters
    })

    it('SET_QUERY updates state', () => {
      const params = { query: { q: 'foo' } }
      mutations[SET_QUERY](state, params)

      expect(state.query.q).toBe(params.query.q)
    })

    it('SET_SEARCH_TYPE updates the state', () => {
      state.searchType = IMAGE
      mutations[SET_SEARCH_TYPE](state, { searchType: AUDIO })
      expect(state.searchType).toEqual(AUDIO)
    })

    it.each`
      filterType           | codeIdx
      ${'licenses'}        | ${0}
      ${'licenseTypes'}    | ${0}
      ${'imageExtensions'} | ${0}
      ${'imageCategories'} | ${0}
      ${'searchBy'}        | ${0}
      ${'aspectRatios'}    | ${0}
      ${'sizes'}           | ${0}
    `(
      'SET_FILTER updates $filterType filter state',
      ({ filterType, codeIdx }) => {
        mutations[SET_FILTER](state, { filterType, codeIdx })

        expect(state.filters[filterType][codeIdx].checked).toBeTruthy()
      }
    )

    it('SET_FILTER updates mature', () => {
      mutations[SET_FILTER](state, { filterType: 'mature' })

      expect(state.filters.mature).toBeTruthy()
    })

    it('SET_FILTER toggles mature', () => {
      state.filters.mature = true
      mutations[SET_FILTER](state, { filterType: 'mature' })

      expect(state.filters.mature).toBeFalsy()
    })

    it('SET_FILTER updates isFilterApplied with provider', () => {
      state.filters.imageProviders = [{ code: 'met', checked: false }]
      mutations[SET_FILTER](state, { filterType: 'imageProviders', codeIdx: 0 })

      expect(getters.isAnyFilterApplied).toBeTruthy()
    })

    it('SET_FILTER updates isFilterApplied with license type', () => {
      mutations[SET_FILTER](state, { filterType: 'licenseTypes', codeIdx: 0 })

      expect(getters.isAnyFilterApplied).toBeTruthy()
    })

    it('SET_PROVIDERS_FILTERS merges with existing provider filters', () => {
      const existingProviderFilters = [{ code: 'met', checked: true }]

      const providers = [
        { source_name: 'met', display_name: 'Metropolitan' },
        { source_name: 'flickr', display_name: 'Flickr' },
      ]

      state.filters.imageProviders = existingProviderFilters

      mutations[SET_PROVIDERS_FILTERS](state, {
        mediaType: 'image',
        providers: providers,
      })

      expect(state.filters.imageProviders).toEqual([
        { code: 'met', name: 'Metropolitan', checked: true },
        { code: 'flickr', name: 'Flickr', checked: false },
      ])
    })

    it('SET_FILTER_IS_VISIBLE updates state', () => {
      const params = { isFilterVisible: 'bar' }
      mutations[SET_FILTER_IS_VISIBLE](state, params)

      expect(state.isFilterVisible).toBe(params.isFilterVisible)
    })
  })

  describe('actions', () => {
    let state = null
    let commitMock = null
    let dispatchMock = null
    let actions = null
    let context = null

    beforeEach(() => {
      commitMock = jest.fn()
      dispatchMock = jest.fn()
      state = store.state()
      actions = store.actions
      context = {
        commit: commitMock,
        dispatch: dispatchMock,
        rootState: {},
        state: state,
      }
    })

    it.each`
      searchType | path                | mediaType
      ${'all'}   | ${'/search/'}       | ${'image'}
      ${'image'} | ${'/search/image/'} | ${'image'}
      ${'audio'} | ${'/search/audio/'} | ${'audio'}
      ${'video'} | ${'/search/video'}  | ${null}
    `(
      "SET_SEARCH_STATE_FROM_URL should set searchType '$searchType' and mediaType '$mediaType' from path '$path'",
      ({ searchType, path, mediaType }) => {
        actions[SET_SEARCH_STATE_FROM_URL](
          { commit: commitMock, dispatch: dispatchMock, state },
          { path: path, query: {} }
        )
        expect(commitMock).toHaveBeenLastCalledWith(SET_SEARCH_TYPE, {
          searchType,
        })
        expect(dispatchMock).toHaveBeenCalledWith(UPDATE_QUERY_FROM_FILTERS, {
          mediaType: mediaType,
        })
      }
    )

    it.each`
      query                      | path                | mediaType
      ${{ license: 'cc0,by' }}   | ${'/search/'}       | ${'image'}
      ${{ searchBy: 'creator' }} | ${'/search/image/'} | ${'image'}
      ${{ mature: 'true' }}      | ${'/search/audio/'} | ${'audio'}
      ${{ durations: 'medium' }} | ${'/search/image'}  | ${'image'}
    `(
      "SET_SEARCH_STATE_FROM_URL should set query '$searchType' from query '$path'",
      ({ path, query, mediaType }) => {
        actions[SET_SEARCH_STATE_FROM_URL](
          { commit: commitMock, dispatch: dispatchMock, state },
          { path: path, query: query }
        )
        expect(dispatchMock).toHaveBeenCalledWith(UPDATE_QUERY_FROM_FILTERS, {
          mediaType,
        })
      }
    )

    it('SET_SEARCH_STATE_FROM_URL sets search type to image', () => {
      const path = '/search/image'
      const query = { q: 'cat', source: 'met' }
      actions[SET_SEARCH_STATE_FROM_URL](context, { path, query })

      expect(context.commit).toHaveBeenLastCalledWith(SET_SEARCH_TYPE, {
        searchType: IMAGE,
      })
    })

    it('SET_SEARCH_STATE_FROM_URL sets search type to ALL_MEDIA if URL param is not set', () => {
      const action = actions[SET_SEARCH_STATE_FROM_URL]

      action(context, {
        path: '/search/',
        query: { q: 'cat', source: 'met' },
      })
      const searchType = ALL_MEDIA
      expect(context.commit).toHaveBeenLastCalledWith(SET_SEARCH_TYPE, {
        searchType,
      })
    })

    it('UPDATE_SEARCH_TYPE sets search type to ALL_MEDIA if URL param is not set', () => {
      const action = actions[UPDATE_SEARCH_TYPE]

      action(context, { searchType: ALL_MEDIA })
      expect(context.commit).toHaveBeenCalledWith(SET_SEARCH_TYPE, {
        searchType: ALL_MEDIA,
      })
      expect(context.commit).toHaveBeenCalledWith(
        CLEAR_OTHER_MEDIA_TYPE_FILTERS,
        {
          searchType: 'all',
        }
      )
    })

    it('CLEAR_FILTERS resets filters to initial state', async () => {
      state.filters.licenses = [
        { code: 'by', checked: true },
        { code: 'by-nc', checked: true },
        { code: 'by-nd', checked: true },
      ]
      actions[CLEAR_FILTERS]({
        commit: commitMock,
        dispatch: dispatchMock,
        state,
      })
      expect(commitMock).toHaveBeenCalledWith(REPLACE_FILTERS, {
        newFilterData: filterData,
      })
      expect(dispatchMock).toHaveBeenCalledWith(UPDATE_QUERY_FROM_FILTERS, {
        q: '',
      })
    })

    it('CLEAR_FILTERS sets providers filters checked to false', async () => {
      state.filters.imageProviders = [
        { code: 'met', name: 'Metropolitan', checked: true },
        { code: 'flickr', name: 'Flickr', checked: false },
      ]

      actions[CLEAR_FILTERS]({
        commit: commitMock,
        dispatch: dispatchMock,
        state,
      })
      const expectedFilters = {
        ...state.filters,
        imageProviders: [
          { code: 'met', name: 'Metropolitan', checked: false },
          { code: 'flickr', name: 'Flickr', checked: false },
        ],
      }
      expect(commitMock).toHaveBeenCalledWith(REPLACE_FILTERS, {
        newFilterData: expectedFilters,
      })
      expect(dispatchMock).toHaveBeenCalledWith(UPDATE_QUERY_FROM_FILTERS, {
        q: '',
      })
    })

    it.each`
      filterType           | code              | idx
      ${'licenses'}        | ${'cc0'}          | ${0}
      ${'licenseTypes'}    | ${'modification'} | ${1}
      ${'imageExtensions'} | ${'svg'}          | ${3}
      ${'imageCategories'} | ${'photograph'}   | ${0}
      ${'searchBy'}        | ${'creator'}      | ${0}
      ${'mature'}          | ${undefined}      | ${-1}
      ${'aspectRatios'}    | ${'tall'}         | ${0}
      ${'sizes'}           | ${'medium'}       | ${1}
    `(
      "TOGGLE_FILTER should set filter '$code' of type '$filterType",
      ({ filterType, code, idx }) => {
        actions[TOGGLE_FILTER](
          { commit: commitMock, dispatch: dispatchMock, state },
          { filterType: filterType, code: code }
        )
        expect(commitMock).toHaveBeenCalledWith(SET_FILTER, {
          filterType: filterType,
          code: code,
          codeIdx: idx,
        })

        expect(dispatchMock).toHaveBeenCalledWith(UPDATE_QUERY_FROM_FILTERS)
      }
    )

    it('TOGGLE_FILTER updates mature', () => {
      actions[TOGGLE_FILTER](
        { commit: commitMock, dispatch: dispatchMock, state },
        { filterType: 'mature' }
      )

      expect(commitMock).toHaveBeenCalledWith(SET_FILTER, {
        filterType: 'mature',
        codeIdx: -1,
      })

      expect(dispatchMock).toHaveBeenCalledWith(UPDATE_QUERY_FROM_FILTERS)
    })

    it('TOGGLE_FILTER toggles mature', () => {
      state.filters.mature = true
      actions[TOGGLE_FILTER](
        { commit: commitMock, dispatch: dispatchMock, state },
        { filterType: 'mature' }
      )

      expect(commitMock).toHaveBeenCalledWith(SET_FILTER, {
        filterType: 'mature',
        codeIdx: -1,
      })

      expect(dispatchMock).toHaveBeenCalledWith(UPDATE_QUERY_FROM_FILTERS)
    })
  })
})
