import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopics } from '../actions/actions';
import { Link } from 'react-router';

class NavBar extends Component {

	componentDidMount () {
		this.props.getTopics();
	}

	render () {
		return (
			<nav className='tabs is-medium is-right' id='nav'>
				<ul>
					<li>
						<Link to='/' className='nav-category'>All</Link>
					</li>
					{this.props
						.topics
						.map((topic, i) =>
							<li key={i}>
								<Link className='nav-category' key={i} to={'/' + topic.slug}>{topic.title}</Link>
							</li>
					)}
				</ul>
			</nav>
		);
	}

}

function mapDispatchToProps (dispatch) {
	return {
		getTopics: () => {
			dispatch(fetchTopics());
		},
	};
}

function mapStateToProps (state) {
	return {
		topics: state.topics.topics.sort((a, b) => b.slug < a.slug)

	};
}

NavBar.propTypes = {
	getTopics: React.PropTypes.func,
	topics: React.PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
