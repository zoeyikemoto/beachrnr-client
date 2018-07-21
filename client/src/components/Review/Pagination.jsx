import React from 'react';

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
        <ul className='pageList'>
            <li className={pager.currentPage === 1 ? 'disabled page' : 'page'}>
                <a onClick={() => this.setPage(1)} >First</a>
            </li>
            <li className={pager.currentPage === 1 ? 'disabled page' : 'page'}>
                <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
            </li>
            {pager.pages.map((page, index) =>
                <li key={index} className={pager.currentPage === page ? 'active page' : 'page'}>
                    <a onClick={() => this.setPage(page)} href='#reviewtop'>{page}</a>
                </li>
            )}
            <li className={pager.currentPage === pager.totalPages ? 'disabled page' : 'page'}>
                <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
            </li>
            <li className={pager.currentPage === pager.totalPages ? 'disabled page' : 'page'}>
                <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
            </li>
        </ul>
    );
  }

}

export default Pagination;
