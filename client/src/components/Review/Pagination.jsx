import React from 'react';
import styled from 'styled-components';


const PageList = styled.ul`
  text-align: center;
`;

const PageLink = styled.a`
  &:hover {
    cursor: pointer;
    text-decoration: underline;}
`;

const PageNumber = styled.li`
  pointer-events: ${props => (props.disabled ? 'none': '')};
  cursor: ${props => (props.disabled ? 'default': '')};
  text-decoration: ${props => (props.disabled ? 'none': '')};
  color: ${props => (props.disabled ? 'grey !important': '')};
  font-weight: ${props => (props.active ? 'bold': '')};
  display: inline-block;
  list-style-type: none;
  padding-right: 20px !important;
`;


class Pagination extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pager: {}
    }
    this.setPage = this.setPage.bind(this);
    this.getPager = this.getPager.bind(this);
  }

  componentWillMount() {
    if(this.props.fullReviewList && this.props.fullReviewList.length) {
      this.setPage(1);
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.fullReviewList !== this.props.fullReviewList) {
      this.setPage(1)
    }
  }

  setPage(page) {
    var pager = this.getPager(this.props.fullReviewList, page, 5, 7);
    this.setState({
      pager: pager
    });
    var itemList = this.props.fullReviewList.slice(pager.startIndex, pager.endIndex+1);
    this.props.onChange(itemList);
  }

  getPager(totalItems, currentPage, pageSize, noOfPages) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 10;
    noOfPages = noOfPages || 10;
    var totalPages =  Math.ceil(totalItems.length / pageSize);
    var startPage, endPage;
    var pages = [];

    if(totalPages <= noOfPages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if(currentPage < (noOfPages/2 + 1)) {
        startPage = 1;
        endPage = noOfPages;
      } else if(currentPage >= totalPages - Math.ceil(noOfPages/2 - 1)) {
        startPage = totalPages - noOfPages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.ceil(noOfPages/2 - 1);
        endPage = currentPage + Math.ceil(noOfPages/2) - 1;
      };
    };

    pages = [...Array(endPage - startPage + 1).keys()].map(p => startPage + p);
    var startIndex = pageSize * (currentPage - 1);
    var endIndex = startIndex + pageSize - 1;

    return {
       currentPage: currentPage,
       totalPages: totalPages,
       pages: pages,
       startIndex: startIndex,
       endIndex: endIndex,
       startPage: startPage,
       endPage: endPage,
       noOfPages: noOfPages
    }
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
        return null;
    }

    return (
        <PageList>
            <PageNumber disabled={pager.currentPage === 1}>
                <PageLink onClick={() => this.setPage(1)} >First</PageLink>
            </PageNumber>
            <PageNumber disabled={pager.currentPage === 1}>
                <PageLink onClick={() => this.setPage(pager.currentPage - 1)}>Previous</PageLink>
            </PageNumber>
            {pager.pages.map((page, index) => (
                index === 0
              ? <PageNumber key={index} active={pager.currentPage === page}>
                    <PageLink onClick={() => this.setPage(1)} href='#reviewtop'>1</PageLink>
                </PageNumber>
              : index === 1 && page !== 2
              ?  <PageNumber key={index} active={pager.currentPage === page}>
                    <PageLink href='#reviewtop'>...</PageLink>
                </PageNumber>
              : index === pager.noOfPages - 1
              ?  <PageNumber key={index} active={pager.currentPage === page}>
                    <PageLink onClick={() => this.setPage(pager.totalPages)} href='#reviewtop'>{pager.totalPages}</PageLink>
                </PageNumber>
              : index === pager.noOfPages - 2 && page !== pager.totalPages - 1
              ?  <PageNumber key={index} active={pager.currentPage === page}>
                    <PageLink href='#reviewtop'>...</PageLink>
                </PageNumber>
              : <PageNumber key={index} active={pager.currentPage === page}>
                    <PageLink onClick={() => this.setPage(page)} href='#reviewtop'>{page}</PageLink>
                </PageNumber>
              )
            )}
            <PageNumber disabled={pager.currentPage === pager.totalPages}>
                <PageLink onClick={() => this.setPage(pager.currentPage + 1)}>Next</PageLink>
            </PageNumber>
            <PageNumber className={pager.currentPage === pager.totalPages}>
                <PageLink onClick={() => this.setPage(pager.totalPages)}>Last</PageLink>
            </PageNumber>
        </PageList>
    );
  }

}

export default Pagination;
