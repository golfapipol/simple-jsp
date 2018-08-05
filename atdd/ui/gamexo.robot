*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    http://localhost:8888/webapp/xo.jsp
${BROWSER}    chrome

*** Test Cases ***
ผู้เล่น player1 ชนะโดยแนวนอนแถวที่ 1
  เปิดหน้าเว็ปOX
  คลิกตำแหน่งแถว1คอลัมน์1
  คลิกตำแหน่งแถว2คอลัมน์1
  คลิกตำแหน่งแถว1คอลัมน์2
  คลิกตำแหน่งแถว2คอลัมน์2
  คลิกตำแหน่งแถว1คอลัมน์3
  แสดงผลว่า player1 มี 1 score

*** Keywords ***
เปิดหน้าเว็ปOX
  Open Browser    ${URL}    ${BROWSER}

คลิกตำแหน่งแถว1คอลัมน์1
  Click Element   id=R1-C1
  Wait Until Element Contains    id=R1-C1    X

คลิกตำแหน่งแถว2คอลัมน์1
  Click Element   id=R2_C1
  Wait Until Element Contains    id=R2_C1    O

คลิกตำแหน่งแถว1คอลัมน์2
  Click Element   id=R1_C2
  Wait Until Element Contains    id=R1_C2    X

คลิกตำแหน่งแถว2คอลัมน์2
  Click Element   id=R2_C2
  Wait Until Element Contains    id=R2_C2    O

คลิกตำแหน่งแถว1คอลัมน์3
  Click Element   id=R1_C3
  Wait Until Element Contains    id=R1_C3    X

แสดงผลว่า player1 มี 1 score
  Wait Until Element Contains    id=player1Score   1

ปิดหน้าเว็ป
  Close Browser
