import PropTypes from "prop-types";

import "./ResourceList.scss";

export default function ResourceList({ publish, resources }) {
	if (resources.length === 0) {
		return <em>No resources to show.</em>;
	}
	return (
		<ul className="resource-list">
			{resources.map(({ description, id, title, topic_name, url }) => (
				<li key={id}>
					<div>
						<h3>{title}</h3>
						{topic_name && <span className="topic">{topic_name}</span>}
					</div>
					{description && <p>{description}</p>}
					<div>
						<a href={url}>{formatUrl(url)}</a>
						{publish && <button onClick={() => publish(id)}>Publish</button>}
					</div>
				</li>
			))}
		</ul>
	);
}

ResourceList.propTypes = {
	publish: PropTypes.func,
	resources: PropTypes.arrayOf(
		PropTypes.shape({
			description: PropTypes.string,
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			topic_name: PropTypes.string,
			url: PropTypes.string.isRequired,
		})
	).isRequired,
};

function formatUrl(url) {
	const host = new URL(url).host;
	if (host.startsWith("www.")) {
		return host.slice(4);
	}
	return host;
}
