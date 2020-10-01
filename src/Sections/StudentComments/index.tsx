import React, { ReactElement } from 'react'
import { COMMENTS } from './comments'
import thumbsUp from './assets/thumbs_up.svg'
import {
  Comments,
  Comment,
  Name,
  Text,
  Reply,
  AvatarContainer,
  Like,
  Verified,
  Subtitle,
  StrongThumbsUp,
} from './style'
import { Section, SectionTitle, Button, Avatar } from '../../components'

export const StudentComments = (): ReactElement => {
  return (
    <Section center>
      <SectionTitle>Comentarios de los estudiantes</SectionTitle>
      <Subtitle>
        <StrongThumbsUp />
        <p>
          <strong>98.7% de valoraciones positivas </strong>/ total de 726
          valoraciones
        </p>
      </Subtitle>
      <Comments>
        {COMMENTS.map(
          ({ image, nameAbbreviation, comment, name, reply, time }) => (
            <Comment key={name}>
              <AvatarContainer>
                <Avatar image={image} nameAbbreviation={nameAbbreviation} />
              </AvatarContainer>
              <div>
                <Name>
                  {name}
                  <Like>
                    <img src={thumbsUp} alt="like" />
                  </Like>
                  <span>hace {time}</span>
                </Name>
                <Text>{comment}</Text>
                {!!reply && (
                  <Reply>
                    <Text>{reply.comment}</Text>
                    <Name>
                      <Verified />
                      {reply.professor ? (
                        <>
                          {reply.name}{' '}
                          <span>
                            <strong> • Profesor</strong>
                          </span>
                        </>
                      ) : (
                        <strong>Equipo Unycos</strong>
                      )}
                      <span> - Hace {reply.time}</span>
                    </Name>
                  </Reply>
                )}
              </div>
            </Comment>
          ),
        )}
      </Comments>
      <Button>Ver más</Button>
    </Section>
  )
}
