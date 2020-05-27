import Link from './Link'
import Heading from './Heading'
import List from './List'
import ListItem from './ListItem'
import Paragraph from './Paragraph'

const renderers = {
  a: Link,
  h1: (props) => Heading({ level: 1, ...props }),
  h2: (props) => Heading({ level: 2, ...props }),
  ul: List,
  li: ListItem,
  p: Paragraph,
}

export default renderers
