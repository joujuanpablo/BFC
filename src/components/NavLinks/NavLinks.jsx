// Libraries
import React from 'react'
import cx from 'classnames'

// Components
import { Link } from 'gatsby'

// Utils
import pageLinks from '../../utils/pageLinks.json';

const links = pageLinks;

export default (props) => {
    const { activeClass, linkClass, linkTextClass, scrolledClass, isScrolled } = props;

    return(
        <React.Fragment>
            {
            links.map((page) => {
                return page.enabled &&
                    <Link to={page.path} title={`${page.title} page`} activeClassName={activeClass} className={linkClass} key={page.title}>
                        <div className={cx(linkTextClass, isScrolled ? scrolledClass : null)}>
                            {page.title}
                        </div>
                    </Link>
                })
            }
        </React.Fragment>
    )
}