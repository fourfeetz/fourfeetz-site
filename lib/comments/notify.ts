export async function notifyNewComment(input:{articlePath:string;nickname:string;body:string}) {
  const mode=process.env.COMMENT_EMAIL_MODE??"disabled";
  if(mode==="mock") {
    if(process.env.VERCEL_ENV==="production") throw new Error("COMMENT_EMAIL_MOCK_FORBIDDEN_IN_PRODUCTION");
    console.info("[comment-email-mock]",{articlePath:input.articlePath,nickname:input.nickname,bodyLength:input.body.length});
    return;
  }
  if(mode!=="resend"||!process.env.RESEND_API_KEY||!process.env.COMMENT_NOTIFICATION_TO)return;
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{authorization:`Bearer ${process.env.RESEND_API_KEY}`,"content-type":"application/json"},body:JSON.stringify({from:process.env.COMMENT_NOTIFICATION_FROM,to:[process.env.COMMENT_NOTIFICATION_TO],subject:`[FourFeetz] 새 댓글 승인 대기: ${input.articlePath}`,text:`닉네임: ${input.nickname}\n글: ${input.articlePath}\n\n${input.body}`})});
  if(!response.ok)throw new Error(`COMMENT_EMAIL_${response.status}`);
}
