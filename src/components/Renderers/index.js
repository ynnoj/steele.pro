import Link from './Link'
import Heading from './Heading'
import List from './List'
import ListItem from './ListItem'
import Paragraph from './Paragraph'

const renderers = {
  a: Link,
  h1: Heading,
  ul: List,
  li: ListItem,
  p: Paragraph,
}

export default renderers
