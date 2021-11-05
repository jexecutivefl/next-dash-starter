import DashboardLayoutContainer from "../../layouts/Dashboard/DashboardLayoutContainer";
import {useContext, useState} from "react";
import {useRouter} from "next/router";
import {Button, TextField, Typography} from "@mui/material";

import ArticleContext from "../../store/article-context";

const initialState = {title: '', content: '', slug: ''}

export default function CreateArticle(){
    const [article, setArticle] = useState(initialState)
    const {title, content, slug} = article
    const router = useRouter()
    const articleCtx = useContext(ArticleContext)
    async function handleSubmit(){
        console.log(article)
        // const articleID = articleCtx.handleCreateArticle(article)
        // if(articleID) {
        //     await router.push(`/articles/${articleID}`)
        // }
    }
    function onChange(e){
        setArticle(()=>({...article, [e.target.value]: e.target.value}))
    }
    return <DashboardLayoutContainer>
        <Typography>Create New Article</Typography>
        <TextField
            fullWidth
            variant="outlined"
            id="filled-basic"
            defaultValue={title}
            label="Title"
            onChange={onChange}
        />
        <TextField
            fullWidth
            variant="outlined"
            id="filled-basic"
            defaultValue={slug}
            label="Slug"
            onChange={onChange}
        />
        {/*todo: replace with markdown editor for next*/}
        <TextField
            fullWidth
            variant="outlined"
            id="filled-basic"
            defaultValue={content}
            label="Content"
            onChange={onChange}
        />
        <Button
            variant={'contained'}
            fullWidth
            onClick={handleSubmit}
        >Create Article</Button>
    </DashboardLayoutContainer>
}