// ResizeObserver 接口监视 Element 内容盒或边框盒或者 SVGElement 边界尺寸的变化。
// 内容盒是盒模型放置内容的部分，这意味着边框盒减去内边距和边框的宽度就是内容盒。边框盒包含内容、内边距和边框
// https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver
// https://juejin.cn/post/7129046057719169055
/**
 *
 * @param element {Element} 监听的元素
 * @param fun {Function} 回调函数
 * @returns observer {ResizeObserver} 返回一个 ResizeObserver 实例 observe unobserve disconnect
 */
export default function resizeObserver(element: Element, fun: Function): ResizeObserver {
  const resizeObserver: ResizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    // entries 参数返回是一个数组，里面包含监听的每个 DOM 元素的相关信息，其中 contentRect 包含的是变化后的 内容区域 的尺寸信息。
    // entries.forEach((entry: ResizeObserverEntry) => {
    //   const { width, height } = entry.contentRect
    // })

    // 传入的回调函数，第一个参数是监听的元素，第二个参数是监听的元素的信息
    fun.apply(element, entries)
  })

  // 开始对元素进行观察
  resizeObserver.observe(element)
  return resizeObserver
}
