<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>XO Game</title>
<style>
    body{ 
        background-color: black;
        color: white;
    }
</style>
</head>
<body>
    <table cellpadding="10">
        <tbody>
            <tr>
                <td id="R1-C1" style="border-right: 5px solid #ddd;border-bottom: 5px solid #ddd"></td>
                <td id="R1-C2" style="border-right: 5px solid #ddd;border-bottom: 5px solid #ddd"></td>
                <td id="R1-C3" style="border-bottom: 5px solid #ddd"></td>
            </tr>
            <tr>
                <td id="R2-C1" style="border-right: 5px solid #ddd;border-bottom: 5px solid #ddd"></td>
                <td id="R2-C2" style="border-right: 5px solid #ddd;border-bottom: 5px solid #ddd"></td>
                <td id="R2-C3" style="border-bottom: 5px solid #ddd"></td>
            </tr>
            <tr>
                <td id="R3-C1" style="border-right: 5px solid #ddd;"></td>
                <td id="R3-C2" style="border-right: 5px solid #ddd;"></td>
                <td id="R3-C3"></td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Player 1 (X)</td>
                <td>Tie</td>
                <td>Player 2 (O)</td>
            </tr>
            <tr>
                <td id="player1Score">0</td>
                <td id="tieScore">0</td>
                <td id="player2Score">0</td>
            </tr>
        </tfoot>
    </table>
    <script src="./js/game.js"></script>
</body>
</html>