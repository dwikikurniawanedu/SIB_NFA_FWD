<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Nilai Ujian</title>
</head>
<body>
    <h2>Form Nilai Ujian</h2>

    <form method="POST">
        Nama: <br>
        <input type="text" name="nama"><br><br>

        Email: <br>
        <input type="email" name="email"><br><br>

        Nilai Ujian: <br>
        <input type="number" name="nilai"><br><br>

        <input type="submit" name="proses" value="Kirim">
    </form>

    <hr>

    <?php
    if (isset($_POST['proses'])) {
        $nama = $_POST['nama'];
        $email = $_POST['email'];
        $nilai = $_POST['nilai'];

        if ($nilai > 70) {
            $keterangan = "Lulus";
        } else {
            $keterangan = "Remedial";
        }

        echo "<h3>Hasil:</h3>";
        echo "Nama: $nama <br>";
        echo "Email: $email <br>";
        echo "Nilai: $nilai <br>";
        echo "Status: $keterangan";
    }
    ?>
</body>
</html>