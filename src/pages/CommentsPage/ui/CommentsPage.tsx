import React, { useEffect, useState } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { API } from 'Api';
import { useTranslation } from 'react-i18next';
import { IPosts } from 'Api/types';

const CommentsPage = () => {
  const [user, setUser] = useState<string>();
  const [posts, setPosts] = useState<Array<IPosts>>([]);
  const [text, setText] = useState<string>('');
  const { t } = useTranslation();

  useEffect(() => {
    API.getUser().then((data) => setUser(data && data.name ? data.name : t('anonymous')));
    API.getAllPosts().then((data) => {
      setPosts(data ? data : []);
    });
  }, []);

  const sentPostHandler = () => {
    const postText = text.trim();
    if (postText.length === 0) return;
    API.createNewPost({
      authorName: user,
      postText: postText,
    }).then(() => {
      API.getAllPosts().then((data) => {
        setPosts(data ? data : []);
      });
    });
  };

  return (
    <div className="comments-page">
      <div className={classNames('comments-box')}>
        <div className="comment-wrapper">
          <h2 className="comment-user">{user}</h2>
          <textarea
            className="comment__input"
            placeholder={t('Add a comment')}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="comment__btn" onClick={sentPostHandler}>
            {t('sent')}
          </button>
        </div>
        {posts.map((post, index) => {
          return (
            <div key={index} className="comment-wrapper">
              <h2 className="comment-user">{post.authorName}</h2>
              <p className="comment-text">{post.postText}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsPage;
