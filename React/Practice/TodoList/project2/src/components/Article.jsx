import Section from "./Section";

const Article = ({todoList, dispatch})  => {
    return (
        <article className='main-article'>
            <Section todoList={todoList} condition={false} dispatch={dispatch}/>
            <Section todoList={todoList} condition={true}  dispatch={dispatch}/>
        </article>
    )
};

export default Article;