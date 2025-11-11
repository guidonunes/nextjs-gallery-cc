import React from 'react'
import styles from './Comment.module.css'
import { fetchCommentData } from '../../utils/utils'

export type StoredCommentsProps = {
  id: number
}

export default async function  StoredComments ({ id }: StoredCommentsProps) {
  const commentData = await fetchCommentData(id);

};
