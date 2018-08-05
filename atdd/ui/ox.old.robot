*** Settings ***
Library    SeleniumLibrary


*** Test Cases ***
เปิดหน้าเวปเกมส์ ox
    Open Browser    http://localhost:8888/webapp/xo.jsp    chrome
    Click Element   id=R1-C1
    Wait Until Element Contains    id=R1-C1    X
    Click Element   id=R2-C1
    Wait Until Element Contains    id=R2-C1    O
    Click Element   id=R1-C2
    Wait Until Element Contains    id=R1-C2    X
    Click Element   id=R2-C2
    Wait Until Element Contains    id=R2-C2    O
    Click Element   id=R1-C3
    Wait Until Element Contains    id=R1-C3    X
    Wait Until Element Contains    id=player1Score   1
    Close Browser

    
