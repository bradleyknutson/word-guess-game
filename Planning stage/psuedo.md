## Basic Styling


## Game Function
* Display instructions to start game
* Computer chooses a random word
* Display blanks for the total number of letters in word
* When a user guesses an accepted letter*, determine if letter is in computer chosen word.
    *a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
* If letter is in word, add it to the correct spot where the letter is located
* If letter is not in word, add to list of missed letters and subtract number of guesses by 1
* Update dom
* If letter has been chosen before, do not update
* If letter is in the word && it completes the word, play associated sound and add 1 to the number of wins. Restart game with a new word
* If letter is not in the word && the number of guesses becomes 0, add 1 to the number of losses.  Restart game with a new word.