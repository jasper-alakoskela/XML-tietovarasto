<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Elokuvakirjasto</title>
                <style>
                    .elokuva{
                        display: inline-block;
                        border: 2px solid black;
                        border-radius: 5px;
                        margin: 10px;
                        padding: 7px;
                        width: 180px;
                    }

                    p{
                        font-size: larger;
                    }
                    h2{
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>Elokuvakirjasto</h1>
                <xsl:for-each select="data/elokuva">
                    <div class="elokuva">
                        <h2><xsl:value-of select="nimi"/></h2>
                        <p> Ohjaaja: <xsl:value-of select="ohjaaja"/></p>
                        <p> Julkaisuvuosi: <xsl:value-of select="julkaisuvuosi"/></p>
                        <p> Genre: <xsl:value-of select="genre"/></p>
                        <p><xsl:value-of select="ikäraja"/></p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>