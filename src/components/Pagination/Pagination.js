import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

/**
 * Pagination - Utility component used to add page numbers to a list of elements
 *
 */
class Pagination extends Component {
  static propTypes = {
    /* the elements that are built into the page based view */
    elements: PropTypes.array.isRequired,
    /* max number of elements displayed per page */
    maxElements: PropTypes.number.isRequired,
    /* max number of pages to render (in case you just want to render first few items of a large set for instance) */
    maxPages: PropTypes.number,
    /* optional starting page, defaults to 1 */
    startingPage: PropTypes.number,

    /* (Not in use) the number of <PageNumber /> components to display to the left/right of the current page, defaults to 1 */
    pageNeighbors: PropTypes.number
  }

  state = { currentPage: this.props.startingPage || 1 }

  /**
   * getTotalElements - fetches total # of elements across all pages
   */
  getTotalElements = () => this.props.elements.length

  /**
   * getNumberOfPages - gets the number of pages given:
   *
   * {
   *   totalElements: the total number of elements across all pages (integer)
   *   maxElements: the max number of elements to be displayed per page (integer)
   * }
   */
  getNumberOfPages = ({ totalElements, maxElements }) => {
    const { maxPages } = this.props

    if (maxPages) return maxPages

    let total = Math.floor(totalElements / maxElements)
    /* if remainer is present, add an extra page, otherwise return total. */
    return totalElements % maxElements !== 0 ? total + 1 : total
  }

  /**
   * getPageNumbersComponent - builds and returns the PageNumber component, not returned as a function.
   *
   * Usage:
   * Either declare a component like so: `const MyPageNumbers = () => this.getPageNumbersComponent()`
   *        then use it like so when rendering: `<SomeOtherContainer><MyPageNumbers /></SomeOtherContainer>`
   *
   * OR when rendering you can simply do the following
   * `<SomeOtherContainer>{this.getPageNumbersComponent()}</SomeOtherContainer>`
   */
  getPageNumbersComponent = () => {
    const { maxElements } = this.props
    const { currentPage } = this.state

    const totalElements = this.getTotalElements()

    const numPages = this.getNumberOfPages({ totalElements, maxElements })

    const pageNumberComponents = []
    if (numPages <= 1) {
      return null
    }

    for (let pageCounter = 0; pageCounter < numPages; pageCounter++) {
      pageNumberComponents.push(
        <S.PageNumber
          onClick={() => this.handleGetNextPage(pageCounter + 1)}
          key={pageCounter + 'page'}
          active={pageCounter + 1 === currentPage}
        >
          {pageCounter + 1}
        </S.PageNumber>
      )
    }

    return <S.PageNumberContainer>{pageNumberComponents}</S.PageNumberContainer>
  }

  /**
   * getElementArrayPageWindow - gets the minIndex & maxIndex for the this.props.elements array based on a page.
   *
   * @param {} page page number to fetch window for
   */
  getElementArrayPageWindow = page => {
    const { maxElements } = this.props

    const maxIndex = maxElements * page - 1
    let minIndex =
      page === 1 ? maxIndex - maxElements : maxIndex - maxElements + 1
    /* if minIndex is less than 0 (page one only) set it to 0 */
    minIndex = minIndex < 0 ? 0 : minIndex
    return { minIndex, maxIndex }
  }

  /**
   * getElementsForPage - gets an array of elements (components) from this.props.elements based on a page number
   */
  getElementsForPage = page => {
    const pageWindow = this.getElementArrayPageWindow(page)
    /* we add one to maxIndex since slice returns one before it's max value */
    return this.props.elements.slice(
      pageWindow.minIndex,
      pageWindow.maxIndex + 1
    )
  }

  /**
   * handleGetNextPage - handles the press of a page button to start the chain of events to load the next page.
   * @param {} page page to set current page to
   */
  handleGetNextPage = page => {
    this.setState({ currentPage: page })
  }

  render () {
    const { currentPage } = this.state
    const {
      elements,
      maxElements,
      maxPages,
      startingPage,
      pageNeighbors,
      ...rest
    } = this.props

    return (
      <S.PaginationComponent {...rest}>
        {this.getElementsForPage(currentPage)}
        {this.getPageNumbersComponent()}
      </S.PaginationComponent>
    )
  }
}

export default Pagination
