'use client'
import React, { useState } from 'react'

import { Comment as CommentType } from '../../utils/utils'
import styles from './Comment.module.css'
import NewCommentForm from './NewCommentForm'


export default function Comment() {
  const [newComments, setNewComments] = useState<CommentType[]>([]);

  const addComment = (newCommentBody: string) => {
    const newComment: CommentType = {
      id: Date.now(),
      body: newCommentBody,
      timestamp: new Date().toISOString(),
    };
    setNewComments((prevComments) => [newComment, ...prevComments]);

  };

  return (
    <div className={styles.comments_section}>
      <div>
        {newComments.map((comment) => (
          <div className={styles.comments} key={comment.id}>
            <p>{comment.body}</p>
            <p className={styles.comments_date}>
              {new Date(comment.timestamp).toLocaleDateString('en-US', { timeZone: 'UTC' })}
            </p>
          </div>
        ))}
      </div>
      <NewCommentForm addComment={addComment} />
    </div>
  );
}
