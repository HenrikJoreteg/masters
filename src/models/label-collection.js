import Collection from 'ampersand-rest-collection'
import Label from './label'
import githubMixin from '../helpers/github-mixin'

export default Collection.extend(githubMixin, {
  url () {
    return this.parent.url() + '/labels'
  },

  model: Label
})
