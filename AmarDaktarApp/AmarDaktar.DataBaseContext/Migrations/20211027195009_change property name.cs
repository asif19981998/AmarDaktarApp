using Microsoft.EntityFrameworkCore.Migrations;

namespace AmarDaktar.DataBaseContext.Migrations
{
    public partial class changepropertyname : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "isApproved",
                table: "Doctors",
                newName: "IsApproved");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "IsApproved",
                table: "Doctors",
                newName: "isApproved");
        }
    }
}
