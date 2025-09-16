const formatDate=(dateString:string)=>{
    const date=new Date(dateString);
    const options={year:'numeric' as const , month:'short' as const};
    return date.toLocaleString('en-US',options);

}
function timeAgo(time:string) {
    const now = new Date();
    const postDate=new Date(time);
    const diff = now.getTime() - postDate.getTime(); // Difference in milliseconds

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (seconds < 60) {
        return `${seconds} seconds ago`;
    } else if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else if (days < 30) {
        return `${days} day ago`;
    } else if (months < 12) {
        return `${months} months ago`;
    } else {
        return `${years} years ago`;
    }
}
const getBase64=(file:any)=>{
    return new Promise((resolve,reject)=>{
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>resolve(reader.result);
        reader.onerror=error=>reject(error);
    })
}

const formatInterviewTime=(dateStr:any)=>{
    const date = new Date(dateStr);

    const formattedDate = date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return formattedDate;
}
const showResume = (base64String: string) => {
    try {
      // Convert Base64 string to binary data
      const byteCharacters = atob(base64String);
      const byteNumbers = new Array(byteCharacters.length);
      
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
  
      // Create a Blob with proper MIME type (PDF)
      const blob = new Blob([byteArray], { type: "application/pdf" });
  
      // Generate a Blob URL
      const blobUrl = URL.createObjectURL(blob);
  
      // Open in a new tab
      window.open(blobUrl, "_blank");
  
      // Revoke the URL after some time to free memory
      setTimeout(() => URL.revokeObjectURL(blobUrl), 10000);
    } catch (error) {
      console.error("Error displaying resume:", error);
    }
  };
export {formatDate,timeAgo,getBase64,formatInterviewTime,showResume};