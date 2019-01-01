// Libraries
import React from 'react'
import cx from 'classnames'

// Components
import { Link } from 'gatsby'
import { Fragment } from 'react'

// Utils
import pageLinks from '../../utils/pageLinks.json';

const links = pageLinks;

export default (props) => {
    <Fragment> {
        links.map((page) => {
            const { activeClass, linkClass, linkTextClass, scrolledClass, isScrolled } = props
            return page.enabled &&
                <Link to={page.path} title={`${page.title} page`} activeClassName={activeClass} className={linkClass} key={page.title}>
                    <div className={cx(linkTextClass, isScrolled ? scrolledClass : null)}>
                        {page.title}
                    </div>
                </Link>
            })
    }
    </Fragment>
}