import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import bundleLink from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults() {
    const res = await bundleLink({
      text: this.input,
    })
    return res
  },
  context: Context,
})