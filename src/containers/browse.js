import React from 'react';
import { Content } from '../components';

export default function BrowseContainer({ contentList, category }) {
	return (
		<Content.Group>
			{contentList[category].map((rowItems, index) => {
				return (
					<Content key={index}>
						<Content.Title>{rowItems.title}</Content.Title>
						<Content.Entities>
							{rowItems.data.map(item => {
								return (
									<Content.Item key={item.id} item={item}>
										<Content.Image
											src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
										/>
									</Content.Item>
								);
							})}
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
