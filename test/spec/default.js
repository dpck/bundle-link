import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import bundleLink from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof bundleLink, 'function')
  },
  async 'calls package without error'() {
    await bundleLink()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await bundleLink({
      text,
    })
    ok(res, text)
  },
}

export default T