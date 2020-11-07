import React from 'react';
import {
	Container,
	Group,
	Title,
	Subtitle,
	Text,
	Feature,
	FeatureTitle,
	FeatureText,
	FeatureClose,
	Rating,
	Selection,
	Entities,
	Metadata,
	Item,
	Image
} from './styles/contentStyles';

export const FeatureContext = React.createContext(null);

export default function Content({ children, ...restProps }) {
	const [ showFeature, setShowFeature ] = React.useState(false);
	const [ itemFeature, setItemFeature ] = React.useState({});

	return (
		<FeatureContext.Provider
			value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}
		>
			<Container {...restProps}>{children}</Container>
		</FeatureContext.Provider>
	);
}

Content.Group = function ContentGroup({ children, ...restProps }) {
	return <Group {...restProps}>{children}</Group>;
};

Content.Title = function ContentTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Content.Subtitle = function ContentSubtitle({ children, ...restProps }) {
	return <Subtitle {...restProps}>{children}</Subtitle>;
};

Content.Text = function ContentText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Content.Metadata = function ContentMetadata({ children, ...restProps }) {
	return <Metadata {...restProps}>{children}</Metadata>;
};

Content.Item = function ContentItem({ item, children, ...restProps }) {
	const { setShowFeature, setItemFeature } = React.useContext(FeatureContext);

	return (
		<Item
			onClick={() => {
				setItemFeature(item);
				setShowFeature(true);
			}}
			{...restProps}
		>
			{children}
		</Item>
	);
};

Content.Image = function ContentImage({ children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>;
};
