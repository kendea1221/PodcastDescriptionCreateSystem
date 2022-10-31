const output = () => {

    const podcastNameTitle = document.getElementById('podcastNameTitle');

    const podcastNameTitleVale = podcastNameTitle.value; 

    const podcastTitle = document.getElementById('podcastTitle');

    const podcastTitleValue  = podcastTitle.value;

    const customBunsyo = document.getElementById('customBunsyo');

    const customBunsyoValue = customBunsyo.value;

    const koteiDiscription = document.getElementById('koteiDiscription');

    const koteiDiscriptionValue = koteiDiscription.value;

    const linkDiscription   = document.getElementById('linkDiscription');

    const linkDiscriptionValue = linkDiscription.value;
    
    const outputText = "" + podcastTitleValue + "\n \n" +customBunsyoValue+ "\n \n" +koteiDiscriptionValue+ "\n \n==============\n#樋口塾,#" +podcastNameTitleVale+ "\n" +podcastNameTitleVale+ "は、誰でもPodcastを始められたらいいという思いのもとに集まった樋口塾の一員として配信しています。 \n ==============\n \n ≪Link≫\n" +linkDiscriptionValue+ "";

    document.getElementById("outputText").innerHTML = outputText;
}