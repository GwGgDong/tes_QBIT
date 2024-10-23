const comments = [
    {
      commentId: 1,
      commentContent: 'Hai',
      replies: [
        {
          commentId: 11,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 111,
              commentContent: 'Haai juga hai jugaa'
            },
            {
              commentId: 112,
              commentContent: 'Haai juga hai jugaa'
            }
          ]
        },
        {
          commentId: 12,
          commentContent: 'Hai juga',
          replies: [
            {
              commentId: 121,
              commentContent: 'Haai juga hai jugaa'
            }
          ]
        }
      ]
    },
    {
      commentId: 2,
      commentContent: 'Halooo'
    }
  ];
  
  // Fungsi untuk menghitung total komentar
  function countComments(comments) {
    let total = 0;
  
    for (const comment of comments) {
      total += 1; // Hitung komentar saat ini
      if (comment.replies && comment.replies.length > 0) {
        total += countComments(comment.replies); // Hitung balasan jika ada
      }
    }
  
    return total;
  }
  
  const totalComments = countComments(comments);
  console.log("Total komentar:", totalComments);