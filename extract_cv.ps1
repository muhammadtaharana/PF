Add-Type -Assembly System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead('c:\Users\User\Desktop\PROJECTS\Taha-Portfolio\src\assets\images\taha_cv_v2.docx')
$entry = $zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xmlContent = $reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

$xml = [xml]$xmlContent
$nsmgr = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$nsmgr.AddNamespace('w', 'http://schemas.openxmlformats.org/wordprocessingml/2006/main')
$nodes = $xml.SelectNodes('//w:t', $nsmgr)
foreach ($node in $nodes) {
    Write-Output $node.InnerText
}
