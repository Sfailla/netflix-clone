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

Content.Entities = function ContentEntities({ children, ...restProps }) {
	return <Entities {...restProps}>{children}</Entities>;
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

Content.Rating = function ContentRating({ children, ...restProps }) {
	return <Rating {...restProps}>{children}</Rating>;
};

Content.Selection = function ContentSelection({ children, ...restProps }) {
	return <Selection {...restProps}>{children}</Selection>;
};

Content.FeatureTitle = function ContentFeatureTitle({ children, ...restProps }) {
	return <FeatureTitle {...restProps}>{children}</FeatureTitle>;
};

Content.FeatureText = function ContentFeatureText({ children, ...restProps }) {
	return <FeatureText {...restProps}>{children}</FeatureText>;
};

Content.FeatureClose = function ContentFeatureClose({ children, ...restProps }) {
	return <FeatureClose {...restProps}>{children}</FeatureClose>;
};

Content.Feature = function ContentFeature({ category, children, ...restProps }) {
	const { showFeature, setShowFeature, itemFeature } = React.useContext(
		FeatureContext
	);
	return showFeature ? (
		<Feature
			src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
			{...restProps}
		>
			<Selection>
				<FeatureTitle>{itemFeature.title}</FeatureTitle>
				<FeatureText>{itemFeature.description}</FeatureText>
				<FeatureClose onClick={() => setShowFeature(false)}>{children}</FeatureClose>
			</Selection>
			<Group>
				<Rating rating={itemFeature.maturity}>
					{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
				</Rating>
				<FeatureText fontWeight="bold">
					{itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
				</FeatureText>
			</Group>
		</Feature>
	) : null;
};
