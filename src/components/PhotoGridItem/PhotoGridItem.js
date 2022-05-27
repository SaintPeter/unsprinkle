import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const avifSrc = ['.avif x1', '@2x.avif x2', '@3x.avif x3'].map((replacement) => {
    return src.replace('.jpg', replacement);
  }).join(',');
  
  const jpgSrc = ['.jpg x1', '@2x.jpg x2', '@3x.jpg x3'].map((replacement) => {
    return src.replace('.jpg', replacement);
  }).join(',');
  
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source type="image/avif"
                  srcSet={avifSrc} />
          <source type="image/jpg"
                  srcSet={jpgSrc} />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 2px;
  margin-bottom: 8px;
`;

const Tags = styled.ul`
  display: flex;
  gap: 8px;
  overflow: hidden;
`;

const Tag = styled.li`
  flex: 0 0 fit-content;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  overflow: hidden;
  white-space: nowrap;
  
  &:last-of-type {
    flex-shrink: 1;
    text-overflow: ellipsis;
  }
`;

export default PhotoGridItem;
