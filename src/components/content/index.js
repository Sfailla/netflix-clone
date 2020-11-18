import React from 'react';
import { Icon } from '../../components';
import { useClickOutsideRef } from '../../hooks';
import { maturityRating } from '../../utils/helpers/maturityRating';
import {
	Container,
	Group,
	Wrapper,
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

const defaultContextState = {
	showFeature: false,
	itemFeature: {},
	setShowFeature: () => {},
	setItemFeature: () => {}
};

export const FeatureContext = React.createContext(defaultContextState);

export default function Content({ children, ...restProps }) {
	const [ showFeature, setShowFeature ] = React.useState(false);
	const [ itemFeature, setItemFeature ] = React.useState({});

	return (
		<FeatureContext.Provider
			value={{
				showFeature,
				setShowFeature,
				itemFeature,
				setItemFeature
			}}
		>
			<Container {...restProps}>{children}</Container>
		</FeatureContext.Provider>
	);
}

Content.Wrapper = function ContentWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

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
	const [ isActive, setIsActive ] = React.useState(false);
	const itemRef = React.useRef();

	const handleRemoveActive = () => setIsActive(false);

	useClickOutsideRef(itemRef, handleRemoveActive);

	return (
		<Item
			ref={itemRef}
			onClick={() => {
				setItemFeature(item);
				setShowFeature(true);
				setIsActive(true);
			}}
			isActive={isActive}
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
				<Wrapper>
					<FeatureTitle>{itemFeature.title}</FeatureTitle>
					<Rating rating={itemFeature.maturity}>
						{maturityRating(itemFeature.maturity)}
					</Rating>
				</Wrapper>
				<FeatureText>{itemFeature.description}</FeatureText>
				<FeatureClose onClick={() => setShowFeature(false)}>
					<Icon icon="close-circle" fill="#e50914" size={25} />
				</FeatureClose>
			</Selection>
			{children}
		</Feature>
	) : null;
};
