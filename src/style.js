import styled from 'styled-components'

export const Body = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:10px;
background: #2F2F2F;
width:100vw;
height:100vh;
padding-top:35px;

h1 {
    font-size: 20px;
    color:#FFFFFF;
    margin-bottom:10px;
   
}
p {
    color:#FFFFFF;
    font-size:14px;
    margin-bottom:10px;
}

input {
    width:230px;
    height:50px;
    display:flex;
    border:none;
    padding-left:10px;
    border-bottom-left-radius:10px;
    border-top-left-radius:10px;
    

}

input:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 




span {
    font-size:14px;
}

form{
    display:flex;
    flex-direction:row;
}


`



export const Button = styled.button`

    width:145px;
    height:50px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    gap:30px;
    border:none;
    color:#FFFFFF;
    font-size:15px;
    background:#E3350C;
    cursor:pointer;
    margin-bottom:30px;
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;

&&:hover {
    opacity:0.9;
}

&&:active {
    opacity:0.6;
}

img {
    width:30px;
    height:30px;
}

`


export const Info = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:10px;
margin-bottom:30px;

img {
    width:85px;
    height:85px;
}
`

export const Loading = styled.div`
height:25px;
width:25px;
border-top:4px solid #FFF;
border-right: 4px solid transparent;
border-radius:50%;
animation: 0.5s spin linear infinite;

@keyframes spin {
    from {
        transform:rotate(0deg);
    }

    to {
        transform:rotate(360deg)
    }
}

`

export const Result = styled.div`
width: 375px;
height: 260px;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 13.5px );
-webkit-backdrop-filter: blur( 13.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
display:flex;
flex-direction:column;
align-items:center;
color:#EEE;
padding-top:25px;
font-size:14px;



h2 {
    font-size:25px;
    font-weight:500;
}

img {   
    margin-top: 35px;
    margin-bottom: 20px;
}



`

export const InfoImage = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
