import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './layout'
import GatsbyLink from 'gatsby-link'
import Button from '../../../packages/button'
import Tag from '../../../packages/tag'
import Panel from '../../../packages/panel'
import Tooltip from '../../../packages/tooltip'
import Modal from '../../../packages/modal'
import Flex from '../../../packages/flex'
import Heading from '../../../packages/heading'
import Pagination from '../../../packages/pagination'
import { List, ListItem } from '../../../packages/list'
import Table from '../../../packages/table'
import Dropdown from '../../../packages/dropdown'
import Checkbox from '../../../packages/checkbox'
import Radio from '../../../packages/radio'

const PreComponent = ({ className, ...props }) =>
  props.children.props.props &&
  props.children.props.props.className === 'language-.jsx' ? (
    <LiveProvider
      mountStylesheet={false}
      code={props.children.props.children}
      scope={{
        Button,
        Tag,
        Panel,
        Tooltip,
        Modal,
        Pagination,
        List,
        ListItem,
        Flex,
        Heading,
        Dropdown,
        Table,
        Checkbox,
        Radio,
        GatsbyLink
      }}
    >
      <LiveEditor tabIndex="-1" />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  ) : (
    <pre {...props} className="WHAT_THE_CRAP" />
  )

const Table2 = props => <table className="u-full-width" {...props} />

let firstLoad = true

export default class MyPageLayout extends React.Component {
  componentDidMount() {
    if (firstLoad) {
      firstLoad = false
    } else {
      this.node.focus()
    }
  }

  render() {
    return (
      <Layout>
        <MDXProvider components={{ pre: PreComponent, table: Table2 }}>
          <main
            ref={n => (this.node = n)}
            tabIndex="-1"
            style={{ outline: 'none' }}
            role="group"
          >
            {this.props.children}
          </main>
        </MDXProvider>
      </Layout>
    )
  }
}
