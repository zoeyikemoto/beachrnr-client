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
    this.setPage(1);
  }

  setPage(page) {
    var pager = this.getPager(this.props.fullReviewList, page, 5);
    this.setState({
      pager: pager
    })
    var itemList = this.props.fullReviewList.slice(pager.startIndex, pager.endIndex+1);
    this.props.onChange(itemList);
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 10;
    var totalPages =  Math.ceil(totalItems.length / pageSize);
    var startPage, endPage;
    var pages = [];

    if(totalPages<=10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if(currentPage<=6) {
        startPage = 1;
        endPage = 10;
      } else if(currentPage >= totalPages - 4) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 4;
        endPage = currentPage + 5;
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
            {pager.pages.map((page, index) =>
                <PageNumber key={index} active={pager.currentPage === page}>
                    <PageLink onClick={() => this.setPage(page)} href='#reviewtop'>{page}</PageLink>
                </PageNumber>
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
