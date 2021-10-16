using Microsoft.EntityFrameworkCore.Migrations;

namespace AmarDaktar.DataBaseContext.Migrations
{
    public partial class addmoreporpertiesindoctor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Position",
                table: "Doctors",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Position",
                table: "Doctors");
        }
    }
}
