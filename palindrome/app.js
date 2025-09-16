function checkPalindrome() {
      var palindrome = document.getElementById("word").value.toLowerCase();
      var flag = true;

      for (let i = 0; i < palindrome.length / 2; i++) {
        if (palindrome[i] !== palindrome[palindrome.length - 1 - i]) {
          flag = false;
          break;
        }
      }

      if (palindrome === "") {
        document.getElementById("result").innerText = "⚠️ Please enter a word!";
      } else if (flag) {
        document.getElementById("result").innerText = palindrome + " is a Palindrome ✅";
      } else {
        document.getElementById("result").innerText = palindrome + " is NOT a Palindrome ❌";
      }
    }