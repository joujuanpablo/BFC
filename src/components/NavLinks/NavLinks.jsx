// Libraries
import React from 'react'
import cx from 'classnames'

// Components
import { Link } from 'gatsby'

export default (props) => {
    const { activeClass, linkClass, linkTextClass, scrolledClass, isScrolled, links } = props;

    return(
        <React.Fragment>
            {
            links.map((page) => {
                return page.enabled &&
                    <div className={linkClass}>
                        <Link to={page.path} title={`${page.title} page`} activeClassName={activeClass} key={page.title}>
                            <div className={cx(linkTextClass, isScrolled ? scrolledClass : null)}>
                                {page.title}
                            </div>
                        </Link>
                    </div>
                })
            }
        </React.Fragment>
    )
}