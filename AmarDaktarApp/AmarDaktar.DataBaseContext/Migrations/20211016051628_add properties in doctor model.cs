using Microsoft.EntityFrameworkCore.Migrations;

namespace AmarDaktar.DataBaseContext.Migrations
{
    public partial class addpropertiesindoctormodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageUrl",
                table: "Doctors",
                newName: "ImageName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "ImageName",
                table: "Doctors",
                newName: "ImageUrl");
        }
    }
}
