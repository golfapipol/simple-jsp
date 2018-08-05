*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    http://www.google.co.th/
${BROWSER}    chrome

*** Test Cases ***
เปิดหน้า Google
  เปิดหน้าเว็ปgoogle

*** Keywords ***
เปิดหน้าเว็ปgoogle
  Open Browser    ${URL}  ${BROWSER}   