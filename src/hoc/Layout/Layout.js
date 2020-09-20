import React, {Component} from 'react'
import classes from './Layout.module.css'

class Layout extends Component {
	render() {
		let containerClasses = [classes.container, 'container'].join(' ')
		return (
			<div className={classes.Layout}>

				<main>
					<div className={containerClasses}>
						<h1 className={classes.title}>todowp3</h1>
						{ this.props.children }
					</div>
				</main>

			</div>
		)
	}
}

export default Layout