$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAciY8UDM252bjvZfLf_DsJ-2L1JMXFxyU",
    authDomain: "heart-310eb.firebaseapp.com",
    databaseURL: "https://heart-310eb.firebaseio.com",
    storageBucket: "heart-310eb.appspot.com",
    messagingSenderId: "268425349744"
  };
  firebase.initializeApp(config);

    // Firebase database reference
  var dbCount = firebase.database().ref().child('count');
  var dbUser = firebase.database().ref().child('user');

  var heartclick =[];
  const $messageField = $('#messageInput');
  const $nameField = $('#nameInput');
  const $messageList = $('#example-messages');
  const $email = $('#email');
  const $password = $('#password');
  const $btnSignIn = $('#btnSignIn');
  const $btnSignUp = $('#btnSignUp');
  const $btnSignOut = $('#btnSignOut');
  const $message = $('#example-messages');
  const $hovershadow = $('.hover-shadow');
  const $signInfo = $('#sign-info');


  // SignIn/SignUp/SignOut Button status
  var user = firebase.auth().currentUser;
  if (user) {
    $btnSignIn.attr('disabled', 'disabled');
    $btnSignUp.attr('disabled', 'disabled');
    $btnSignOut.removeAttr('disabled')
  } else {
    $btnSignOut.attr('disabled', 'disabled');
    $btnSignIn.removeAttr('disabled')
    $btnSignUp.removeAttr('disabled')
  }

  // Sign In
  $btnSignIn.click(function(e){
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    // signIn
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
    promise.then(function(){
      console.log('SignIn User');
    });
  });

  // SignUp
  $btnSignUp.click(function(e){
    const email = $email.val();
    const pass = $password.val();
    const auth = firebase.auth();
    // signUp
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(function(e){
      console.log(e.message);
      $signInfo.html(e.message);
    });
    promise.then(function(user){
      console.log("SignUp user is "+user.email);
      const dbUserid = dbUser.child(user.uid).child('data');
      const dbUserlike = dbUser.child(user.uid).child('data').child('like');
      dbUserid.push({email:user.email});
      dbUserlike.update({num0:"0",num1:"0",num2:"0",num3:"0",num4:"0",num5:"0",num6:"0",num7:"0",num8:"0",num9:"0",num10:"0"});
    });
  });

  // Listening Login User
    firebase.auth().onAuthStateChanged(function(user){
      if(user) {
        console.log(user);
        $signInfo.html(user.email+" is login...");
        $btnSignIn.attr('disabled', 'disabled');
        $btnSignUp.attr('disabled', 'disabled');
        $btnSignOut.removeAttr('disabled')

        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: "+profile.providerId);
          console.log("  Provider-specific UID: "+profile.uid);
          console.log("  Name: "+profile.displayName);
          console.log("  Email: "+profile.email);
          console.log("  Photo URL: "+profile.photoURL);
        });
      } else {
        console.log("not logged in");
      }
    });

    // SignOut
    $btnSignOut.click(function(){
      firebase.auth().signOut();
      console.log('LogOut');
      $signInfo.html('No one login...');
      $btnSignOut.attr('disabled', 'disabled');
      $btnSignIn.removeAttr('disabled')
      $btnSignUp.removeAttr('disabled')
      $message.html('');
      $(".heart").attr("src","./img/heart_line.png");
    });


    /* heart ststus */
    firebase.auth().onAuthStateChanged(function(user){
      var i=0;
      /* 累積數量 */
      dbCount.on('child_added', function (snapshot) {
        var data = snapshot.val();
        var sum = data.sum;
        switch(i){
          case 0:
            $(".num0").text(sum);
            break;
          case 1:
            $(".num1").text(sum);
            break;
          case 2:
            $(".num2").text(sum);
            break;
          case 3:
            $(".num3").text(sum);
            break;
          case 4:
            $(".num4").text(sum);
            break;
          case 5:
            $(".num5").text(sum);
            break;
          case 6:
            $(".num6").text(sum);
            break;
          case 7:
            $(".num7").text(sum);
            break;
          case 8:
            $(".num8").text(sum);
            break;
          case 9:
            $(".num9").text(sum);
            break;
          case 10:
            $(".num10").text(sum);
            break;
        }
        i++;
      });

      /* 是否按過 */
      if(user){
        const dbUserlike = dbUser.child(user.uid).child('data').child('like');
        var i=0;
        dbUserlike.on('child_added', function (snapshot) {
          var data = snapshot.val();
          if(data ==1){
            var $img;
            switch(i){
              case 0:
              case 11:
                $img = $(".num0").prev();
                heartclick[0]='1';
                break;
              case 1:
              case 12:
                $img =$(".num1").prev();
                heartclick[1]='1';
                break;
              case 2:
              case 13:
                $img =$(".num2").prev();
                heartclick[2]='1';
                break;
              case 3:
              case 14:
                $img =$(".num3").prev();
                heartclick[3]='1';
                break;
              case 4:
              case 15:
                $img =$(".num4").prev();
                heartclick[4]='1';
                break;
              case 5:
              case 16:
                $img =$(".num5").prev();
                heartclick[5]='1';
                break;
              case 6:
              case 17:
                $img =$(".num6").prev();
                heartclick[6]='1';
                break;
              case 7:
              case 18:
                $img =$(".num7").prev();
                heartclick[7]='1';
                break;
              case 8:
              case 19:
                $img =$(".num8").prev();
                heartclick[8]='1';
                break;
              case 9:
              case 20:
                $img =$(".num9").prev();
                heartclick[9]='1';
                break;
              case 10:
              case 21:
                $img =$(".num10").prev();
                heartclick[10]='1';
                break;
            }
            $img.attr("src","./img/heart.png");
          }

          i++;
        });


      }

    });
    /* end heart ststus */


    /* add heart sum*/
    $(".heart").click(function(){
      var sum;
      var add;
      var $img;
      var imgsrc;
      var $text;
      var pic;
      var $heart = $(this);
      firebase.auth().onAuthStateChanged(function(user){
        if(user){
          const dbUserlike = dbUser.child(user.uid).child('data').child('like');
          if( $heart.next().hasClass("num0")){
            $text = $(".num0");
            pic = dbCount.child('img00');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[0] != 1){
              dbUserlike.update({num0:"1"});
              heartclick[0] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num0:"0"});
              heartclick[0] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num1") ){
            $text = $(".num1");
            pic = dbCount.child('img01');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[1] != 1){
              dbUserlike.update({num1:"1"});
              heartclick[1] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num1:"0"});
              heartclick[1] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num2") ){
            $text = $(".num2");
            pic = dbCount.child('img02');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[2] != 1){
              dbUserlike.update({num2:"1"});
              heartclick[2] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num2:"0"});
              heartclick[2] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num3") ){
            $text = $(".num3");
            pic = dbCount.child('img03');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[3] != 1){
              dbUserlike.update({num3:"1"});
              heartclick[3] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num3:"0"});
              heartclick[3] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num4") ){
            $text = $(".num4");
            pic = dbCount.child('img04');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[4] != 1){
              dbUserlike.update({num3:"1"});
              heartclick[4] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num3:"0"});
              heartclick[4] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num5") ){
            $text = $(".num5");
            pic = dbCount.child('img05');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[5] != 1){
              dbUserlike.update({num5:"1"});
              heartclick[5] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num5:"0"});
              heartclick[5] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num6") ){
            $text = $(".num6");
            pic = dbCount.child('img06');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[6] != 1){
              dbUserlike.update({num6:"1"});
              heartclick[6] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num6:"0"});
              heartclick[6] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num7") ){
            $text = $(".num7");
            pic = dbCount.child('img07');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[7] != 1){
              dbUserlike.update({num7:"1"});
              heartclick[7] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num7:"0"});
              heartclick[7] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num8") ){
            $text = $(".num8");
            pic = dbCount.child('img08');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[8] != 1){
              dbUserlike.update({num8:"1"});
              heartclick[8] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num8:"0"});
              heartclick[8] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num9") ){
            $text = $(".num9");
            pic = dbCount.child('img09');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[9] != 1){
              dbUserlike.update({num9:"1"});
              heartclick[9] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num9:"0"});
              heartclick[9] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else if( $heart.next().hasClass("num10") ){
            $text = $(".num10");
            pic = dbCount.child('img10');
            pic.on('child_added', function (snapshot){ sum = snapshot.val();  });
            if(heartclick[10] != 1){
              dbUserlike.update({num10:"1"});
              heartclick[10] =1;
              add = 1;
              imgsrc = "./img/heart.png" ;
            }
            else{
              dbUserlike.update({num10:"0"});
              heartclick[10] =0;
              add= -1;
              imgsrc = "./img/heart_line.png" ;
            }
          }
          else{
            console.log("xxx");
          }
          sum = sum + add;
          $img =$text.prev();
          $img.attr("src",imgsrc);
          pic.update({sum:sum});
          $text.text(sum);

        }else{
          //跳出登入畫面

        }
      });
    });
    /* end heartclick */




});
