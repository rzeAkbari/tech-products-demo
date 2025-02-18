import "./ResourceList.scss";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function ResourceList({ publish, resources }) {
	return (
		<ul className="resource-list">
			{resources.length === 0 && (
				<li className="no-resources">
					<em>No resources to show.</em>
				</li>
			)}
			{resources.map(({ description, id: draftId, title, topic_name, url }) => (
				<li key={draftId}>
					<div>
						<h3>
							<NavLink to={`/drafts/${draftId}`}>{title}</NavLink>
						</h3>
						{topic_name && <span className="topic">{topic_name}</span>}
					</div>
					{description && <p>{description}</p>}
					<div>
						<a href={url}>{formatUrl(url)}</a>
						{publish && (
							<button onClick={() => publish(draftId)}>Publish</button>
						)}
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
