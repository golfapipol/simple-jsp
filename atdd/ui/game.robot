*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    http://localhost:8888/webapp/game.jsp
${BROWSER}    chrome


*** Test Cases ***
เล่นเกมส์ ox มีผู้เล่นสองคนโดยที่ player1 เป็นฝ่ายชนะในแนวนอนแถวแรก
  เปิดหน้าเว็ปเกมส์
  คลิกตำแหน่งแถว1คอลัมน์1
  คลิกตำแหน่งแถว2คอลัมน์1
  คลิกตำแหน่งแถว1คอลัมน์2
  คลิกตำแหน่งแถว2คอลัมน์2
  คลิกตำแหน่งแถว1คอลัมน์3
  แสดงผลว่า player1 มี 1 score
  ปิดหน้าเว็ป
  
*** Keywords ***
เปิดหน้าเว็ปเกมส์
  Open Browser    ${URL}  ${BROWSER}   

คลิกตำแหน่งแถว1คอลัมน์1
  Click Element   id=R1-C1
  Wait Until Element Contains    id=R1-C1    X

คลิกตำแหน่งแถว2คอลัมน์1
  Click Element   id=R2-C1
  Wait Until Element Contains    id=R2-C1    O

คลิกตำแหน่งแถว1คอลัมน์2
  Click Element   id=R1-C2
  Wait Until Element Contains    id=R1-C2    X

คลิกตำแหน่งแถว2คอลัมน์2
  Click Element   id=R2-C2
  Wait Until Element Contains    id=R2-C2    O

คลิกตำแหน่งแถว1คอลัมน์3
  Click Element   id=R1-C3
  Wait Until Element Contains    id=R1-C3    X

แสดงผลว่า player1 มี 1 score
  Wait Until Element Contains    id=player1Score   1

ปิดหน้าเว็ป
  Close Browser


    
