/* alanode example/ */
import bundleLink from '../src'

(async () => {
  const res = await bundleLink({
    text: 'example',
  })
  console.log(res)
})()