import React, { useState } from 'react';
import imgAdd from '@Assets/images/iconImage.jpg';
import closeBtn from '@Assets/images/closeBtn.jpg';
import './newsCreator.less';

const NewsCreator = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState(null);
    const [errorText, setErrorText] = useState(true);
    const [errorImg, setErrorImg] = useState(true);
    const [count, setCount] = useState(0);
    function addImage(e) {
        const validator = new RegExp('.*.(jpg|jpeg|png|gif|svg)');

        if (!validator.test(e.target.files[0].name)) {
            setErrorImg(false);
        } else {
            setImage(URL.createObjectURL(e.target.files[0]));
            setText(e.target.files[0].name);
            setErrorImg(true);
        }
    }
    function deleteImage() {
        setImage(null);
        setText(null);
    }
    return (
        <div className="comment-block">
            <form
                method="post"
                className="message-box"
                onSubmit={(e) => {
                    e.preventDefault();

                    if (e.target[0].value.isEmpty) {
                        setErrorText(true);
                    } else {
                        setErrorText(false);
                    }

                    if (e.target[0].value.isEmpty) {
                        setErrorImg(true);
                    } else {
                        setErrorImg(false);
                    }

                    if (!e.target[1].value && !e.target[0].value) return true;

                    return true;
                }}
            >
                <div className="container-comment-title">
                    <h1 className="comment-title">Добавить новость</h1>
                </div>
                <div className="container-comment-description">
                    <span className="comment-description">
                        Введите текст новости, а также приложите изображение
                        (размер: 270х270px)
                    </span>
                </div>

                <div
                    className={
                        errorText
                            ? 'container-text-area'
                            : 'container-text-area-red'
                    }
                >
                    <textarea
                        className="text-area"
                        placeholder="Введите текст новости"
                        onChange={(e) => setCount(e.target.value.length)}
                    ></textarea>
                    {count !== 0 || !errorText ? (
                        <div className="limit-text">
                            <span>Cимволов: </span>
                            <span className={count > 150 ? 'error' : ''}>
                                {count}
                            </span>
                            <span>/150</span>
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>

                <div className="container-add-img">
                    <label className="input-file">
                        <input type="file" onChange={addImage} />
                        <img className="add-img" src={imgAdd} />
                        <span className="add-text">+ Добавить изображение</span>
                    </label>
                    <div className="container-added-img">
                        <img
                            className={
                                image == null ? 'added-image-null' : 'added-img'
                            }
                            src={image}
                        />
                        <span className="added-text">{text} </span>
                        <img
                            src={closeBtn}
                            className={
                                image == null ? 'close-btn-null' : 'close-btn'
                            }
                            onClick={() => deleteImage()}
                        />
                    </div>
                    <div
                        className={
                            errorImg
                                ? 'container-error-text-none'
                                : 'container-error-text'
                        }
                    >
                        <span className="error">
                            Неверный формат изображения
                        </span>
                    </div>
                </div>
                <button className="post-btn">Применить</button>
            </form>
        </div>
    );
};

export default NewsCreator;
