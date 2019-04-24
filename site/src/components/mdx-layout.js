import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { MDXProvider } from '@mdx-js/tag'
import Layout from './layout'
import GatsbyLink from 'gatsby-link'
import Badge from '../../../packages/badge'
import Button from '../../../packages/button'
import Checkbox from '../../../packages/checkbox'
import Dropdown from '../../../packages/dropdown'
import Flex from '../../../packages/flex'
import Heading from '../../../packages/heading'
import { List, ListItem } from '../../../packages/list'
import Modal from '../../../packages/modal'
import Pagination from '../../../packages/pagination'
import Panel from '../../../packages/panel'
import Radio from '../../../packages/radio'
import Spinner from '../../../packages/spinner'
import Table from '../../../packages/table'
import { Tabs, Tab } from '../../../packages/tabs'
import Tag from '../../../packages/tag'
import Toast from '../../../packages/toast'
import Tooltip from '../../../packages/tooltip'
import { DatePicker, RangePicker } from '../../../packages/datepicker'

const PreComponent = ({ className, ...props }) =>
  props.children.props.props &&
  props.children.props.props.className === 'language-.jsx' ? (
    <LiveProvider
      mountStylesheet={false}
      code={props.children.props.children}
      scope={{
        Badge,
        Button,
        Checkbox,
        Dropdown,
        Heading,
        Flex,
        List,
        ListItem,
        Modal,
        Pagination,
        Panel,
        Radio,
        Spinner,
        Table,
        Tabs,
        Tab,
        Tag,
        Toast,
        Tooltip,
        GatsbyLink,
        DatePicker,
        RangePicker
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
