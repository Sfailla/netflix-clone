import React from 'react';
import { Content } from '../components';

export default function BrowseContainer({ contentList, category }) {
	return (
		<Content.Group>
			{contentList[category].map((slideItems, index) => {
				return (
					<Content key={index}>
						<Content.Title>{slideItems.title}</Content.Title>
						<Content.Entities>
							{slideItems.data.length &&
								slideItems.data.map(item => (
									<Content.Item key={item.id} item={item}>
										<Content.Image
											src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
										/>
										<Content.Metadata>
											<Content.Subtitle>{item.title}</Content.Subtitle>
											<Content.Text>{item.description}</Content.Text>
										</Content.Metadata>
									</Content.Item>
								))}
						</Content.Entities>
						<Content.Feature category={category}>
							{/* <VideoPlayer>
								<VideoPlayer.Button />
								<VideoPlayer.Video src="/images/videos/stranger-things.m4v" />
							</VideoPlayer> */}
						</Content.Feature>
					</Content>
				);
			})}
		</Content.Group>
	);
}
